const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Allow Metro to bundle .wasm files (needed for expo-sqlite on web)
config.resolver.assetExts.push('wasm');

// Transform ESM packages that use import.meta (e.g. @lottiefiles/dotlottie-react)
const defaultIgnore = config.transformer?.transformIgnorePatterns?.[0]?.source
  ?? 'node_modules/(?!(react-native|@react-native|expo|@expo|react-navigation|@react-navigation)/)';

config.transformer = {
  ...config.transformer,
  transformIgnorePatterns: [
    /node_modules\/(?!(react-native|@react-native|expo|@expo|react-navigation|@react-navigation|@lottiefiles)\/).*/,
  ],
};

// Redirect Skia's WebGPUViewNativeComponent to a stub to avoid duplicate registration
// with react-native-wgpu (both register "WebGPUView")
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (
    moduleName.includes('WebGPUViewNativeComponent') &&
    context.originModulePath.includes('@shopify/react-native-skia')
  ) {
    return {
      filePath: path.resolve(__dirname, 'src/stubs/webgpu-view-stub.js'),
      type: 'sourceFile',
    };
  }

  // Fall back to default resolution
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;

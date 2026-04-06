const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Allow Metro to bundle .wasm files (needed for expo-sqlite on web)
config.resolver.assetExts.push('wasm');

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Redirect Skia's WebGPUViewNativeComponent to a stub to avoid duplicate registration
  if (
    moduleName.includes('WebGPUViewNativeComponent') &&
    context.originModulePath.includes('@shopify/react-native-skia')
  ) {
    return {
      filePath: path.resolve(__dirname, 'src/stubs/webgpu-view-stub.js'),
      type: 'sourceFile',
    };
  }

  // Stub @lottiefiles/dotlottie-react on web to avoid import.meta ESM issues
  if (moduleName === '@lottiefiles/dotlottie-react') {
    return {
      filePath: path.resolve(__dirname, 'src/stubs/dotlottie-react-stub.js'),
      type: 'sourceFile',
    };
  }

  // Fall back to default resolution
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;

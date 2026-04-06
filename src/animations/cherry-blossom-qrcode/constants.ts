// Background and container colors
export const COLORS = {
    background: '#0f172a',
} as const;

export const CONTAINER_BG = COLORS.background;
export const DEFAULT_QR_CONTENT = 'https://your-event-page.com';

// Color palette for lighting (공유회 딥 블루 테마)
export const PALETTE = {
    skyZenith: { r: 0.20, g: 0.30, b: 0.55 },
    skyHorizon: { r: 0.30, g: 0.40, b: 0.65 },
    sun: { r: 0.75, g: 0.88, b: 1.10 },
    skyFill: { r: 0.25, g: 0.35, b: 0.60 },
    bounce: { r: 0.20, g: 0.45, b: 0.80 },
} as const;

// Block/cube dimensions
export const BLOCK_SIZE = 0.0245;
export const CUBE_HEIGHT = BLOCK_SIZE;

// Tree structure parameters
export const TRUNK_RADIUS = 2.5;
export const TRUNK_LAYERS = 14;
export const MAX_CANOPY_LAYERS = 14;
export const CANOPY_OUTER_RADIUS_FACTOR = 0.50;

// Grid limits
export const MAX_GRID_SIZE = 41;
export const MAX_BLOCKS = MAX_GRID_SIZE * MAX_GRID_SIZE * 18;

// Camera angles for 3D isometric view
export const ISO_ANGLE_Y = 0.78;
export const ISO_ANGLE_X = -0.55;

// Camera angles for 2D flat view (top-down for QR scanning)
export const FLAT_ANGLE_Y = 0.0;
export const FLAT_ANGLE_X = -1.5708; // -π/2

// Animation
export const LERP_SPEED = 3.0;

// View scaling
export const VIEW_SCALE_3D = 1.6;
export const VIEW_SCALE_2D = 2.1;

// Centering offsets for 2D view
export const Y_OFFSET_2D = 0.08;
export const X_OFFSET_2D = 0.015;

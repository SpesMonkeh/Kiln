const TR = {
    // background
    backgroundTitle: 'Baggrund',
    backgroundReset: 'Nulstil',
    backgroundImport: 'Importér',
    backgroundFill: 'Udfyld',

    // camera
    cameraTitle: 'Kamera',
    cameraReset: 'View',
    cameraCenter: 'Reset (bar)',
    cameraFront: 'Front (F)',
    cameraLeft: 'Left (L)',
    cameraTop: 'Top (T)',
    cameraMode: 'Mode',
    cameraOrbit: 'Orbit (Turntable)',
    cameraSpherical: 'Spherical (Trackball)',
    cameraPlane: 'Plan (Trackball)',
    cameraProjection: 'Projection',
    cameraPerspective: 'Perspektiv',
    cameraOrthographic: 'Orthographic',
    cameraFov: 'Synfuel',
    cameraPivot: 'Picking pivot',

    // file
    fileTitle: 'Filer (import/export)',
    fileImportTitle: 'Importér',
    fileAdd: 'Tilføj (.obj, .sgl, .ply, .stl)',
    fileAutoMatrix: 'Skalér og centrér',
    fileVertexSRGB: 'sRGB vertex farve',
    fileExportSceneTitle: 'Eksportér Scene',
    fileExportAll: 'Eksportér alt',
    fileExportSGL: 'Gem .sgl (SculptGL)',
    fileExportOBJ: 'Gem .obj',
    fileExportPLY: 'Gem .ply',
    fileExportSTL: 'Gem .stl',

    fileExportTextureTitle: 'Export textures',
    fileExportTextureSize: 'Size',
    fileExportColor: 'Save diffuse',
    fileExportRoughness: 'Save roughness',
    fileExportMetalness: 'Save metalness',

    // scene
    sceneTitle: 'Scene',
    sceneReset: 'Ryd scene',
    sceneResetConfirm: 'Bekræft ryd scene',
    sceneAddSphere: 'Tilføj kugle',
    sceneAddCube: 'Tilføj kube',
    sceneAddCylinder: 'Tilføj cylinder',
    sceneAddTorus: 'Tilføj torus',
    sceneSelection: 'Selektion',
    sceneMerge: 'Sammensæt selektion',
    sceneDuplicate: 'Kopiér selection',
    sceneDelete: 'Slet selection',

    // mesh
    meshTitle: 'Mesh',
    meshNbVertices: 'Vertex : ',
    meshNbFaces: 'Faces : ',

    // topology
    topologyTitle: 'Topology',

    //multires
    multiresTitle: 'Multiresolution',
    multiresSubdivide: 'Subdivide',
    multiresReverse: 'Reverse',
    multiresResolution: 'Resolution',
    multiresNoLower: 'There is no lower resolution level.',
    multiresNoHigher: 'There is no higher resolution level.',
    multiresDelHigher: 'Delete higher',
    multiresDelLower: 'Delete lower',
    multiresSelectLowest: 'Select the lowest resolution before reversing.',
    multiresSelectHighest: 'Select the highest resolution before subdividing.',
    multiresWarnBigMesh: function (nbFacesNext)
    {
        return 'The next subdivision level will reach ' + nbFacesNext + ' faces.\n' +
            'If you know what you are doing, click again on "subdivide".';
    },
    multiresNotReversible: 'Sorry it is not possile to reverse this mesh.\n' +
        'The mesh is not a product of a (loop-catmull) subdivision surface on a manifold mesh.',

    // remesh
    remeshTitle: 'Voxel remeshing (quads)',
    remeshRemesh: 'Remesh',
    remeshResolution: 'Resolution',
    remeshBlock: 'Block',

    // dynamic
    dynamicTitle: 'Dynamic Topology',
    dynamicActivated: 'Activated (no quads)',
    dynamicSubdivision: 'Subdivision',
    dynamicDecimation: 'Decimation',
    dynamicLinear: 'Linear subdivision',

    // sculpt
    sculptTitle: 'Sculpting & Painting',
    sculptBrush: 'Brush',
    sculptInflate: 'Inflate',
    sculptTwist: 'Twist',
    sculptSmooth: 'Smooth (-Shift)',
    sculptFlatten: 'Flatten',
    sculptPinch: 'Pinch',
    sculptCrease: 'Crease',
    sculptDrag: 'Drag',
    sculptPaint: 'Paint',
    sculptMasking: 'Masking (-Ctrl)',
    sculptMove: 'Move',
    sculptLocalScale: 'Local scale',
    sculptTransform: 'Transform (E)',

    sculptCommon: 'Common',
    sculptTool: 'Tool',
    sculptSymmetry: 'Symmetry',
    sculptContinuous: 'Continuous',
    sculptRadius: 'Radius (-X)',
    sculptIntensity: 'Intensity (-C)',
    sculptHardness: 'Hardness',
    sculptCulling: 'Thin surface (front vertex only)',
    sculptAlphaTitle: 'Alpha',
    sculptLockPositon: 'Lock position',
    sculptAlphaTex: 'Texture',
    sculptImportAlpha: 'Import alpha tex (jpg, png...)',
    sculptNegative: 'Negative (N or -Alt)',
    sculptColor: 'Albedo',
    sculptRoughness: 'Roughness',
    sculptMetallic: 'Metallic',
    sculptClay: 'Clay',
    sculptAccumulate: 'Accumulate (no limit per stroke)',
    sculptColorGlobal: 'Global',
    sculptPickColor: 'Material / Color picker (-S)',
    sculptTangentialSmoothing: 'Relax only',
    sculptTopologicalCheck: 'Topological check',
    sculptMoveAlongNormal: 'Move along normal (N or -Alt)',
    sculptMaskingClear: 'Clear (-Ctrl + Drag)',
    sculptMaskingInvert: 'Invert (-Ctrl + Click)',
    sculptMaskingBlur: 'Blur',
    sculptMaskingSharpen: 'Sharpen',
    sculptPBRTitle: 'PBR materials',
    sculptPaintAll: 'Paint all',
    sculptExtractTitle: 'Extract',
    sculptExtractThickness: 'Thickness',
    sculptExtractAction: 'Extract !',

    // states
    stateTitle: 'Historik',
    stateUndo: 'Undo',
    stateRedo: 'Redo',
    stateMaxStack: 'Maks. Stack',

    // pressure
    pressureTitle: 'Tablet pressure',
    pressureRadius: 'Pressure radius',
    pressureIntensity: 'Pressure intensity',

    // rendering
    renderingTitle: 'Rendering',
    renderingGrid: 'Show grid',
    renderingSymmetryLine: 'Show mirror line',
    renderingMatcap: 'Matcap',
    renderingCurvature: 'Curvature',
    renderingPBR: 'PBR',
    renderingTransparency: 'Transparency',
    renderingNormal: 'Normal shader',
    renderingUV: 'UV shader',
    renderingShader: 'Shader',
    renderingMaterial: 'Materiale',
    renderingImportUV: 'Import (jpg, png...)',
    renderingImportMatcap: 'Import (jpg, png...)',
    renderingExtra: 'Ekstra',
    renderingFlat: 'Flat shading',
    renderingWireframe: 'Wireframe (W)',
    renderingExposure: 'Exposure',
    renderingEnvironment: 'Environment',
    renderingIsolate: 'Isolate/Show (I)',
    renderingFilmic: 'Filmic tonemapping',

    // contour
    contour: 'Kontur',
    contourShow: 'Vis kontur',
    contourColor: 'Farve',
    darkenUnselected: 'Darken unselected',

    // pixel ratio
    resolution: 'Resolution',

    // matcaps
    matcapPearl: 'Perlemor',
    matcapClay: 'Ler',
    matcapSkin: 'Hud',
    matcapGreen: 'Grøn',
    matcapWhite: 'Hvid',

    // sketchfab
    sketchfabTitle: 'Go to Sketchfab !',
    sketchfabUpload: 'Upload',
    sketchfabUploadMessage: 'Please enter your sketchfab API Key.\n' +
        'You can also leave "guest" to upload anonymously.\n' +
        '(a new window will pop up when the uploading and processing is finished)',
    sketchfabUploadError: function (error)
    {
        return 'Sketchfab upload error :\n' + error;
    },
    sketchfabUploadSuccess: 'Upload success !\nHere is your link :',
    sketchfabAbort: 'Abort the last upload ?',
    sketchfabUploadProcessing: 'Processing...\nYour model will be available at :',

    about: 'Om og Hjælp',

    alphaNone: 'Ingen',
    alphaSquare: 'Firkantet',
    alphaSkin: 'Hud',

    remeshTitleMC: 'Voxel remeshing (manifold tris)',
    remeshRemeshMC: 'Remesh',
    remeshSmoothingMC: 'Relax topology'
};

export default TR;

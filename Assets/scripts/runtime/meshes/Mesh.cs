// Copyright © Christian Holm Christensen
// 05/10/2024

namespace Kiln.Runtime.Meshes;


/*
Basic usage:
var mesh = new MeshStatic(gl); // provide gl only if we need to render the mesh
mesh.setVertices(vertices); // vec3 xyz
mesh.setFaces(faces); // ivec4 abcd (d=Utils.TRI_INDEX if tri)

// these are optional
mesh.setColors(colors); // vec3 rgb
mesh.setMaterials(materials); // vec3 roughness/metalness/masking
mesh.initTexCoordsDataFromOBJData(UV, facesUV); // vec2, ivec4

mesh.init(); // compute octree/topo/UV, etc...
mesh.initRender(); // only if gl has been provided
*/

public class Mesh
{
	bool isVisible;
	
	readonly uint id; // Flyt til global og gør static (måske)
	readonly MeshData meshData;
	readonly RenderData renderData;
	readonly TransformData transformData;

	const DEF_ROUGHNESS = .18f; // .18f;
	const DEF_METALLICNESS = .08f; // .08f;

	public bool IsVisible => this.isVisible;
	public uint Id => this.id;
	public MeshData MeshData => this.meshData;
	public RenderData RenderData => this.renderData;
	public TransformData TransformData => this.transformData;

	public Mesh()
	{
		this.id = 0;  // useful id to retrieve a mesh (dynamic mesh, multires mesh, voxel mesh)
		this.meshData = null;
		this.transformData = null;
		this.renderData = null;
		this.isVisible = true;
	}

	public static float SortFunction(Mesh meshA, Mesh meshB)
	{	
		// render transparent (back to front) after opaque (front to back) ones
		bool transparentA = meshA.isTransparent();
		bool transparentB = meshB.isTransparent();

		if (transparentA && transparentB is false) return 1;
		if (transparentA is false && transparentB) return -1;
		
		float depthDifference = meshB.GetDepth() - meshA.GetDepth();
		float transparency = transparentA && transparentB ? 1f : -1f;
		
		return depthDifference * transparency;
	}

	void SetId(uint id) => this.id = id;

	void SetVisibility(bool enable) => this.IsVisible = enable;


	void SetVertices(float[] vertices)
	{
		this.meshData.verticesXYZ = vertices;
		this.meshData.nbVertices = vertices.Length / 3;
	}

	void SetFaces(float[] faces)
	{
		this.meshData.facesABCD = faces;
		this.meshData.nbFaces = faces.Length / 4;
	}

	void SetTexCoords(float[] coords)
	{
		this.meshData.texCoordsST = coords;
		this.meshData.nbTexCoords = coords.Length / 2;
	}

	void SetColors(Color meshColor) => this.meshData.colorsRGB = meshColor;
	
	void SetMaterials(Material[] materials) => this.meshData.materialsPBR = materials;
}
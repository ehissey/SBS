using UnityEngine;
using System.Collections;

[AddComponentMenu("Material/Draw Vector Field")]

public class ObjectBlur : MonoBehaviour {
	//Initial materials.
	Material	m_stretchMaterial,
				m_regularMaterial;
	
	//Holds our position
	Matrix4x4 m_prevModelMatrix;
	
	protected void Start() {
		//Load materials
		m_stretchMaterial = MotionVectorMaterialFactory.NewMaterial();
		m_regularMaterial = renderer.material;
		
		//Save current positions
		m_prevModelMatrix = transform.localToWorldMatrix;
		
	}
	
	//Don't process when we don't need to.
	protected void OnEnable() {
		MotionBlurEffect.RegisterObject(this);
	}
	
	protected void OnDisable() {
		MotionBlurEffect.DeregisterObject(this);
	}
	
	//Update after the first movement
	protected void LateUpdate() {
		Vector4 currentPosition = transform.position;
		currentPosition.w = 1f;
		
		//Obtain new modelview matricies
		Matrix4x4 _mv = CameraInfo.ViewMatrix*transform.localToWorldMatrix;
		Matrix4x4 _mvPrev = CameraInfo.PrevViewMatrix*m_prevModelMatrix;
		
		//Set matricies
		m_stretchMaterial.SetMatrix("_mv", _mv);
		m_stretchMaterial.SetMatrix("_mvPrev", _mvPrev);
		m_stretchMaterial.SetMatrix("_mvInvTrans", _mv.transpose.inverse);
		m_stretchMaterial.SetMatrix("_mvpPrev", CameraInfo.PrevViewProjMatrix*m_prevModelMatrix);
		
		//Save our transfer
		m_prevModelMatrix = transform.localToWorldMatrix;
	}
	
	//Set up vector rendering for motion
	public void PreMotionRender() 
	{
		m_regularMaterial = renderer.material;
		renderer.material = m_stretchMaterial;
	}
	
	//Regular rendering
	public void PostMotionRender() 
	{
		renderer.material = m_regularMaterial;
	}
}
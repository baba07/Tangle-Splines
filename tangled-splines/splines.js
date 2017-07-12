var t=[];
function createWires(n){
	var ta=[];
	t=ta;
	
	var r=6;
	//var n=4;
	var add1=0;
	var add2=2*r;
	var add3=2*r;
	var add4=4*r;
	for(var i=0;i<n;i++){
		var x=i%4;
		if(x==0){
			spline1(add1);
			add1+=4*r;
		}
		if(x==1){
			spline3(add3);
			add3+=4*r;
		}
		if(x==2){
			spline2(add2);
			add2+=4*r;
		}
		if(x==3){
			spline4(add4);
			add4+=4*r;
		}
	}
	return t;
}
function spline1(add1){
	var quartergeometry=new THREE.Geometry();
	var quarterMaterial=new THREE.MeshBasicMaterial({color:0x0000ff});
	var radius=6;
	for(var i=0;i<90;i++){
		var angle=THREE.Math.degToRad(i);
		quartergeometry.vertices.push(new THREE.Vector3(radius*Math.cos(angle),add1+(radius*Math.sin(angle)),0));
	}
	var quarterMesh=new THREE.Line(quartergeometry,quarterMaterial);
	scene.add(quarterMesh);
	t.push(quarterMesh);
	
}
function spline2(add2){
	var quartergeometry2=new THREE.Geometry();
	var quarterMaterial2=new THREE.MeshBasicMaterial({color:0xff0000});
	var radius=6;
	for(var i=179;i>=90;i--){
		var angle=THREE.Math.degToRad(i);
		quartergeometry2.vertices.push(new THREE.Vector3(radius*Math.cos(angle),add2+radius*Math.sin(angle),0));
	}
	var quarterMesh2=new THREE.Line(quartergeometry2,quarterMaterial2);
	scene.add(quarterMesh2);
	t.push(quarterMesh2);
}
function spline3(add3){
	var quartergeometry3=new THREE.Geometry();
	var quarterMaterial3=new THREE.MeshBasicMaterial({color:0xffff00});
	var radius=6;
	for(var i=269;i>=180;i--){
		var angle=THREE.Math.degToRad(i);
		quartergeometry3.vertices.push(new THREE.Vector3(radius*Math.cos(angle),add3+radius*Math.sin(angle),0));
	}
	var quarterMesh3=new THREE.Line(quartergeometry3,quarterMaterial3);
	scene.add(quarterMesh3);
	t.push(quarterMesh3);

}
function spline4(add4){
	var quartergeometry4=new THREE.Geometry();
	var quarterMaterial4=new THREE.MeshBasicMaterial({color:0xff00ff});
	var radius=6;
	var initial=new THREE.Vector3(0,-4,0);
	
	for(var i=270;i<360;i++){
		var angle=THREE.Math.degToRad(i);
		quartergeometry4.vertices.push(new THREE.Vector3(radius*Math.cos(angle),add4+(radius*Math.sin(angle)),0));
	}
	var quarterMesh4=new THREE.Line(quartergeometry4,quarterMaterial4);
	scene.add(quarterMesh4);
	t.push(quarterMesh4);
}
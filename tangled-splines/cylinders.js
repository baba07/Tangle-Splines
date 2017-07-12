
function splines(n){
	var tub=[];
	for(var i=0;i<n;i++){
		var numPoints=100;
		var start = endpoints[i][0];
		var middle = midpoints[i][0];
		var middlex = midpoints[i][1];
		var middley = midpoints[i][2];
		var end = endpoints[i][3];
		var x=true;
		//if(i%2==0)x=false;
		var curveQuad = new THREE.CatmullRomCurve3([start, middle,middlex,middley, end]);
		var tube = new THREE.TubeGeometry(curveQuad, numPoints, 1.5, 50, false);
		var mesh = new THREE.Mesh(tube, new THREE.MeshNormalMaterial({opacity:0.9,transparent: x}));
		mesh.castShadow=true;
		scene.add(mesh);
		tub.push(mesh);
		object1[i].push(mesh);
		//console.log(mesh);
	}
	return tub;
}
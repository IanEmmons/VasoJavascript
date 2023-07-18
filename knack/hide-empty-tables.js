function hideEmptyTables(event, scene) {
	//console.log(`Scene '${scene.key}'`);
	// Loop through each scene view on the page.
	scene.views.map(function(view) {
		//console.log(`   View '${view.name}'`);
		// If view has row data whose length is less than 1...
		if(Knack.models[view.key].data && Knack.models[view.key].data.length < 1) {
			//console.log(`      Hiding view '${view.name}'`);
			$('#' + view.key).remove(); // remove that view
		}
	});
}

$(document).on('knack-scene-render.scene_118', hideEmptyTables);
$(document).on('knack-scene-render.scene_465', hideEmptyTables);
$(document).on('knack-scene-render.scene_466', hideEmptyTables);
$(document).on('knack-scene-render.scene_470', hideEmptyTables);
$(document).on('knack-scene-render.scene_504', hideEmptyTables);

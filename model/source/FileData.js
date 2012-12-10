Ares.Model.File = Backbone.Model.extend({				// TODO: Move to enyo.Model when possible
	getId: function() {
		return this.get("id");
	},
	getFile: function() {
		return this.get("file");
	},
	getData: function() {
		return this.get("data");
	},
	setData: function(data) {
		this.set("data", data);
	},
	getProjectData: function() {
		return this.get("project-data");
	},
	setProjectData: function(projectData) {
		this.set("project-data", projectData);
	},
	getEdited: function() {
		return this.get("edited");
	},
	setEdited: function(edited) {
		this.set("edited", edited);
	},
	getMode: function() {
		return this.get("mode");
	},
	setMode: function(mode) {
		this.set("mode", mode);
	}
});

Ares.Model.Files = Backbone.Collection.extend({		// TODO: move to enyo.Collection when possible
	model: Ares.Model.File,
	initiliaze: function() {
		enyo.log("Ares.Model.Files.initialize()");
	},
	newEntry: function(file, data, projectData) {
		var id = this.computeId(file);
		var obj = new Ares.Model.File({id: id, file: file, data: data, "project-data": projectData, edited: false});
		this.add(obj);
		return obj;
	},
	removeEntry: function(id) {
		var obj = this.get(id);
		this.remove(obj);
	},
	computeId: function(file) {
		{
			var id = file.service.getConfig().id + "-" + file.id;
			enyo.log("Ares.Model.Files.computeId() ==> " + id);			// TODO: TBR
		}

		return file.service.getConfig().id + "-" + file.id;
	}
});

if ( ! Ares.Data) {
	Ares.Data = {};
}

// Create the workspace collection of projects and load the data from the local storage
Ares.Data.Files = new Ares.Model.Files();
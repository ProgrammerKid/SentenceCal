var database = {
    clone: function() {
        var database = localStorage.getItem("sentencecal");

        //initialize if doesn't exist
        if (database != undefined && database != null) {
            try {
                database = JSON.parse(database);
            } catch (TypeError) {
                database = {
                    events: {}
                };
            }

            localStorage.setItem("sentencecal", JSON.stringify(database));
        } else {
            database = {
                events: {}
            };
        }

        return database;
    },

    push: function(newDB) {
        localStorage.setItem("sentencecal", JSON.stringify(newDB));
    }
};

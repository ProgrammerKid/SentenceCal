var showEvents = {
    getByDateOrder: function() {
        var storage = database.clone(),
            date = new Date(),
            year = (date.getYear() + 1900) + "",
            month = date.getMonth() + 1,
            date_num = date.getDate(),
            date_id = parseInt((year + month) + date_num),
            order = [];

        for (var date_id = date_id; date_id < 30000000; date_id++) {
            for (var i in storage.events) {
                var eventOBJ = storage.events[i],
                    outs = "";
                for (var i in eventOBJ.date) {
                    outs = outs + eventOBJ.date[i];
                }
                //outs should be something like: 19991221 for 12/21/1999
                if (date_id = parseInt(outs)) {
                    order.push(eventOBJ.event_name);
                }
            }
        }
        return order;
    }
};

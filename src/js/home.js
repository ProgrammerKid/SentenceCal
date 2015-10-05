var home = {
    getSentence: function() {
        var priority, attendhost, eventname, output;

        priority = document.getElementById("sentence-priority").value;
        attendhost = document.getElementById("sentence-attendhost").value;
        eventname = document.getElementById("sentence-event").value;

        if (priority == "needto") priority = 1;
        else if (priority == "wantto") priority = 2;
        else if (priority == "might") priority = 3;

        output = {
            priority: priority,
            attend_or_host: attendhost,
            event_name: eventname
        };

        return output;
    },

    done: function() {
        var sentence = home.getSentence(),
            storage = database.clone();

        storage.events[sentence.event_name] = sentence;

        database.push(storage);
    }
};

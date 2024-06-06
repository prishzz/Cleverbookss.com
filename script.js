function openFeature(evt, featureName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tabs
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab's content and add an "active" class to the button that opened the tab
    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
}
);
function openFeature(evt, featureName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tabs
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab's content and add an "active" class to the button that opened the tab
    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
}
);

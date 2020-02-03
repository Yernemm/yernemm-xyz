module.exports = {
    formatDate,
    pad,
    getDateObj
}


function formatDate(date){
    return ""
    + date.getUTCFullYear() + '-'
    + pad((1 + date.getUTCMonth()),2) + '-'
    + pad(date.getUTCDate(),2) + " "
    + pad((date.getUTCHours() % 12), 2) + ":"
    + pad(date.getUTCMinutes(), 2) + ":"
    + pad(date.getUTCSeconds(), 2) + " "
    + (Math.floor(date.getUTCHours() / 12) == 0 ? "AM" : "PM")
    + " (UTC)"
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function getDateObj(timestamp){
     if(timestamp * 1 == timestamp)
        timestamp = timestamp * 1;

        return new Date(timestamp);
}
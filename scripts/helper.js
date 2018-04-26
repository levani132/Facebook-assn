function timePassed(since){
    var passed = new Date() - since;
    return toSmallTime(new Date(passed - 14400000));
}

function toSmallTime(date){
    if(date.getFullYear() > 1970){
        return (date.getFullYear() - 1970) + "y";
    }
    if(date.getMonth() > 0){
        return date.getMonth() + "mon";
    }
    if(date.getDate() > 1){
        return (date.getDate() - 1) + "d";
    }
    if(date.getHours() > 0){
        return date.getHours() + "h";
    }
    if(date.getMinutes() > 0){
        return date.getMinutes() + "m";
    }
    if(date.getSeconds() > 20){
        return date.getSeconds() + "s";
    }
    return "Just now";
}
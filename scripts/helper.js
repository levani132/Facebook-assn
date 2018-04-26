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

var loggedUser;

function likersToString(likers){
    var likersString = "";
    if(!likers.length)
        return likersString;
    var otherLikers = likers.length;
    var liked = false;
    if(likers.indexOf(loggedUser) != -1){
        liked = true;
        likersString = `You`;
        otherLikers--;
    }
    if(otherLikers == 0)
        return likersString;
    if(liked && otherLikers == 1)
        likersString += ' and ';
    else if(liked)
        likersString += ', ';

    
    var index = 0;
    if(likers[index] == loggedUser)
        index++;
    likersString += `${likers[index].name} ${likers[index].lastName}`;
    otherLikers--;
    if(otherLikers == 0)
        return likersString;
    if(otherLikers == 1)
        likersString += ' and ';
    else
        likersString += ', ';

    
    index++;
    if(likers[index].id == loggedUser)
        index++;
    likersString += `${likers[index].name} ${likers[index].lastName}`;
    otherLikers--;
    if(otherLikers == 0)
        return likersString;
    if(otherLikers == 1)
        likersString += ` and 1 other`;
    else
        likersString += ` and ${otherLikers} others`;
    
    return likersString;
}
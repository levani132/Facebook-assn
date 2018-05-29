const LocalStorage = getProxy(localStorage);

function getProxy(target){
    new Proxy(target, {
        get: function(target, prop, reciever){
            const data = target[prop];
            if(data){
                return JSON.parse(data);
            }else{
                return null;
            }
        }
    })
}
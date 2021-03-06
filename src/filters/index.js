export default class Filter {
    static currency(v,type="￥"){
        return type + v.toFixed(2)
    };
    date(v){
        let time = new Date(v);
        return time.getFullYear()+"-"
            +(time.getMonth()+1).toString().padStart(2,"0")+"-"
            + (time.getDate()).toString().padStart(2,"0")+" "
            + (time.getHours()).toString().padStart(2,"0") + ":"
            + (time.getMinutes()).toString().padStart(2,"0") + ":"
            + (time.getSeconds()).toString().padStart(2,"0");
    }
}
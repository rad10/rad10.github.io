var d = new Date()
function week() {
	var weekBase = (((d.getMonth()*31)+d.getDate()-(d.getDay()+1))/7)-1;
    if (d.getDay() <= 6) {
    	weekBase += 1;
    };
    return Math.round(weekBase);
};
var schoolWeek = week()
//calculate for breaks
if (((d.getMonth()*31)+d.getDate())>=102) {
	schoolWeek = schoolWeek - 1; //spring break
}
document.getElementById("WK"+schoolWeek).className="currentWeek";
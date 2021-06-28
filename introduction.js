
function getShortMessages(arg){
  let newArray = arg.filter(item => item.value.length < 50);
  return newArray;
}
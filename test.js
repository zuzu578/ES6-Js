const params = {
  employeeIdx : [10,20,30],
  type:[0,1,1],
  status:[0,1,1],
  requesterIdx : 20,
}
const list = [];
params.employeeIdx.map((item)=>{
  const obj = {
    employeeIdx: item,
    type: params.type,
    status: params.status,
    requesterIdx: params.requesterIdx,
  }
  list.push(obj);
})
console.log(list);

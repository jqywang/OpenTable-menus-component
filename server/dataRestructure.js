// restructure database array of unnested objects into array of
// nested objects that our react components can use

const dataRestructure = (objArr) => {
  let menus = {};
  for (let i = 0; i < objArr.length; i++) {
    if (!menus[objArr[i].menu_name]) {
      menus[objArr[i].menu_name] = {};
    }
    if (!menus[objArr[i].menu_name][objArr[i].subgroup_name]) {
      menus[objArr[i].menu_name][objArr[i].subgroup_name] = {subgroup_desc: objArr[i].subgroup_desc, entries: [] };
    }
    var menuObj = menus[objArr[i].menu_name];
    var subGroupObj = menuObj[objArr[i].subgroup_name];
    var entryObj = {
      name: objArr[i].entry_name,
      price: objArr[i].entry_price,
      desc: objArr[i].entry_desc,
      extras: {
        price: objArr[i].extras_price,
        name: objArr[i].extras_name
      }
    };
    subGroupObj.entries.push(entryObj);
  }
  return menus;
};

module.exports.dataRestructure = dataRestructure;
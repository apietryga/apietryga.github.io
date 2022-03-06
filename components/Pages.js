const Job = require("./Job");
// let Job = require("./Job");
//   /*refresh on development*/
//   delete require.cache[require.resolve('./Job')]; Job = require('./Job');
class Pages{
  constructor(data){
    this.jobs = [];
    this.lists = ['search'];
    this.static = [];
    for(const page in data){
      if(page == "pageBuild"){continue;}
      if(data[page].constructor == Array){
        this.lists.push(page)
        for(const subpage of data[page]){
          subpage.parent = page;
          const newPage = new Job(subpage);
          this.jobs.push(newPage);
        }
      }
      if(data[page].constructor == Object){
        this.static.push(data[page].name)
        if(data[page].recomended != null){
          for(const section in data[page].recomended){
            const tempArr = data[page].recomended[section];
            data[page].recomended[section] = [];
            for(const single of tempArr){
              data[page].recomended[section].push(this.getByKey('name', single))
            }
          }
        }
        const newPage = new Job(data[page]);
        this.jobs.push(newPage);
      }
    }
  }
  getByKey(key, value){
    for(const single of this.jobs){
      if(single[key] == value){
        return single
      }
    }
    return null
  }
  getArrayByKey(key){
    const result = [];
    for(const single of this.jobs){
      result.push(single[key]);
    }
    return result;
  }
  getArrayOfWorksByKey(key, value, lang = 'en'){
    const result = [];
    for(const single of this.jobs){
      if(single[key] == value){
        single.content = single.getContent(lang);
        result.push(single);
      }
    }
    // console.log(result)
    // for(const single of this.jobs){
    //   if(single[key] == value){
    //     single.content = single.getContent(lang);
    //     result.push(single);
    //   }
    // }



    return result;
  }
}
module.exports = Pages;
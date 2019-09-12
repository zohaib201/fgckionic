// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment.prod';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   url = environment.baseurl;
//   constructor(public http: HttpClient) { }

//   login(logindata) {
//     return this.http.post(this.url + 'member_from_app/signin', logindata);
//   }

//   getall() {
//     return this.http.get(this.url + 'member/getallapproved');
//   }

  // signup(data) {
  //   return this.http.post(this.url + 'member_from_app/create', data);
  // } 

//   update(id, data) {
//     return this.http.post(this.url + 'member_from_app/edit/' + id, data);
//   }

//   id(id) {
//     return this.http.get(this.url + 'member_from_app/get/'+id);
//   }

//     memberfromappid(id) {
//         return this.http.get(this.url + 'member/getByMemberFromApp/'+id);
//     }

//     memberselfid(id) {
//         return this.http.get(this.url + 'member/getByMemberFromApp/'+id);
//     }

//     saveImage(data) {
//     const fd = new FormData();
//     fd.append('imageUrl', data);
//     return this.http.post(this.url + '/image/saveimage', fd);
//   }

//   Updatepassword(id,password) {
//     return this.http.post(this.url + 'member_from_app/resetpassword/' + id , password);
//   }

//   prayercreate(id,data) {
//     return this.http.post(this.url + 'prayer/create/' + id , data);
//   }

//   videoget() {
//     return this.http.get(this.url + 'video/getall');
//   }


//   audioget() {
//     return this.http.get(this.url + 'audio/getall');
//   }
// }
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.baseurl;
  constructor(public http: HttpClient) { }



  prayercreate(id, data) {
    return this.http.post(this.url + 'prayer/create/' + id, data);
  }

  videoget() {
    return this.http.get(this.url + 'video/getall');
  }

  devotionalgetall() {
    return this.http.get(this.url + 'devotional/getall');
  }


  devotionalsingle(id) {
    return this.http.get(this.url + 'devotional/get/' + id);
  }

  audioget() {
    return this.http.get(this.url + 'audio/getall');
  }

  memberbyMemberFromAppID(id) {
    return this.http.get(this.url + 'member/getByMemberFromApp/' + id);
  }

  getallprayer() {
    return this.http.get(this.url + 'prayer/getallapproved');
  }

  login(logindata) {
    return this.http.post(this.url + 'member_from_app/signin', logindata);
  }

  getallapprove() {
    return this.http.get(this.url + 'member_from_app/getallapproved/');
  }

  signup(data) {
    return this.http.post(this.url + 'member_from_app/create', data);
  }

  update(id, data) {
    return this.http.post(this.url + 'member_from_app/edit/' + id, data);
  }

  id(id) {
    return this.http.get(this.url + 'member_from_app/get/' + id);
  }

  Updatepassword(id, password) {
    return this.http.post(this.url + 'member_from_app/resetpassword/' + id, password);
  }

  cell_group_ID(id) {
    return this.http.get(this.url + 'cell_group/get/' + id);
  }

  All_event() {
    return this.http.get(this.url + 'event/getall');
  }

  getallquestion() {
    return this.http.get(this.url + 'question/getall');
  }

  getsinglesurvey(id) {
    return this.http.get(this.url + 'question/get/' + id);
  }

  answer(data) {
    return this.http.post(this.url + 'question/answer' , data);
  }
  getsingle(id){
    return this.http.get(this.url + 'financial/getallbymemberfromapp/'+id);
  }

    getallnotification() {
        return this.http.get(this.url + 'notification/getall');
    }

  forgetemail(email) {
    return this.http.post(this.url + 'member/resetPasswordRequest/', email);
  }
  code(vCode) {
    return this.http.post(this.url + 'member/resetPasswordValidate/', vCode);
  }
  newpassword(newpass , id) {
    return this.http.post(this.url + 'member/resetPassword/' + id , newpass);
  }
  updatenotification(data) {
    return this.http.post(this.url + 'member_from_app/updateNotifyToken' , data);
  }

  cellgroups() {
    return this.http.get(this.url + 'cell_group/getall');
  }

  allimg() {
    return this.http.get(this.url + 'member/getallimgphoto');
  }
  all() {
    return this.http.get(this.url + 'member/getallincharge');
  }

}

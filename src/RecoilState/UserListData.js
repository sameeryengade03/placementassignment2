import { atom } from "recoil";

export const UserListData = atom({
  key : "updatedListUser" ,
  default : [
    {
        UserName : "sameer03" ,
        FirstName : "Sameer",
        LastName : "Yengade",
        Password : "sam@12",
        ConfirmPassword : "sam@12",
        Image : "https://media.licdn.com/dms/image/D5603AQH9NE61SAfYqw/profile-displayphoto-shrink_400_400/0/1672949383586?e=1680134400&v=beta&t=70RXxtTSymhQtTZ2HZ3-6oUxqOGVRty9kcXxHfXzeiQ",
        Address : "sai nagar" ,
        Country : "India",
        State : "Maharashtra",
        City : "Wardha",
        Email : "sameeryengade12@gmail.com",
        Gender : "mail",
        DOB : "03.12.2000",
        PhoneNUmber : "+91 8007585385",
        id : 0
    },
    {
        UserName : "functionup" ,
        FirstName : "pratesh",
        LastName : "sir",
        Password : "12345678",
        ConfirmPassword : "12345678",
        Image : "https://lab.functionup.org/_next/static/media/logo.6da03344.svg",
        Address : "Bengolore" ,
        Country : "India",
        PhoneNUmber : "+91 8045129545",
        State : "bangal",
        City : "Bengolore",
        Email : "functionup@gmail.com",
        Gender : "male",
        DOB : "01.09.2020",
        Zipp : "442001",
        id : 1
    }
    
]
})


//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie{
    constructor(title,studio,rating="PG"){
this.title1 =title;
this.studio1 =studio;
this.rating1 =rating;
    }
    set title(t)
    {
     this.title1=t;
    }
    get title()
    {
        this.title1;
    }
    set studio(s){
        this.studio1=s;
            }
            get studio(){
                this.studio1;
            }
            set rating(r){
                this.rating1=r;
                    }
                    get rating(){
                        this.title1;
                    }
}
const rolex=new Movie("Casino Royale","Eon Productions","PG-13");

console.log(rolex.rating1);
console.log(rolex.studio1);
console.log(rolex.title1);

// ------------------------------
// Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius,color){
this.radius1=radius;
this.color1=color;
    }
    set radiusCircle(r){
this.radius1=radius;
    }
    get radiusCircle(){
        this.color1;
    }
    set colorCircle(c){
        this.color1=color;
            }
            get color1Circle(){
                this.color;
            }
            get toString(){
                return `"Circle[radius=${this.radius1},color=${this.color1}]"`
            }
            get areaCircle(){
                let area=(3.14*this.radius1*this.radius1).toFixed(2);
                return
     `${area}`;
            }
            get circumference(){
                return `${Math.PI*2*this.radius}`
            }

}
const circle=new Circle(5,"blue");
console.log(circle.toString);

// ----------------------
// Write a “person” class to hold all the details.
class Person{
    constructor(names,email,age,qualification){
        this.name1=names;
        this.email1=email;
        this.age1=age;
        this.qualifi=qualification;
    }
    set names(n){
        this.name1=n;
            }
            get names(){
                this.name1;
            }
            set email(e){
                this.email1=e;
                    }
                    get email(){
                        this.email1;
                    }
                    set age(a){
                        this.age1=a;
                            }
                            get rage(){
                                this.age1;
                            }
                            set qualification(q){
                                this.qualifi=q;
                                    }
                                    get qualification(){
                                        this.qualifi;
                                    }

}
const micheal=new Person("George","mgsonj@gmail.com",21,"B.E");
console.log(micheal.name1);
// ----------------------
// write a class to calculate the uber price.
class UberPrice{
    constructor(distance) {
        this.distance1 = distance;
        
      }
      set distance(d){
        return this.distance1;
      }
      get distance(){
        return this.distance1;
      }
      get price(){
        return 20*this.distance1;
      }
    }
    
    let uber = new UberPrice(10);
    console.log(uber.price);
  

import request, {gql} from "graphql-request"
const MASTER_URL='https://api-ap-south-1.hygraph.com/v2/cllrw8u832qyy01un1x5l1kom/master';
export const getCarsList = async() =>{
    const query = gql`
    query MyQuery {
      carLists {
        carAvg
        carBrand
        carType
        createdAt
        name
        price
        seat
        image {
          url
        }
      }
    }`
    
      const result = await request(MASTER_URL,query)
      console.log(result);
      return result;

      

    }
    export const getStoreLocations=async()=>{
        const query=gql`
        query storeLocation {
          storesLocations {
            location
          }
        }  
        `
        const result=await request(MASTER_URL,query);
        return result;
      }
      
      
      export const createBooking=async(formValue:any)=>{
        // const mutationQuery=gql`
        // mutation MyMutation {
        //   createBooking(
        //     data:  {userName: "`+formValue.userName+`", 
        //     pickUpDate: "`+formValue.pickUpDate+`", 
        //     pickUpTime: "`+formValue.pickUpTime+`", 
        //     dropOffDate: "`+formValue.dropOffDate+`", 
        //     dropOffTime: "`+formValue.dropOffTime+`", 
        //     contactNumber: "`+formValue.contactNumber+`", 
        //     carId: {connect: 
        //       {id: "`+formValue.carId+`"}}}
        //   ) {
        //     id
        //   }
        // }
        
        // `
      
        // const result=await request(MASTER_URL,mutationQuery);
        const result = "hello"
        return result;
    }
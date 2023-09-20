import React from 'react'
import { paymentCreate,paymentVerify } from '../../service/UserApi';
import { useNavigate } from 'react-router-dom';

const PaymentModal = ({item}) => {
const navigate=useNavigate()

    const handlePayment = async () => {
		try {
            if(item?.amount){
                const data={amount:item?.amount,id:item._id}
                paymentCreate(data).then((res)=>{
                    if(res.status===200){
                      const modalCheckbox = document.getElementById("my_modal_5");
                      if(modalCheckbox){
                      modalCheckbox.close()
                      }
                    
                        // console.log(res.data.data)
                        initPayment(res.data.data);
                    }
                }).catch((err)=>{
                    console.log(err,"payment create err")
                })
            }
			
			
			
		} catch (error) {
			console.log(error);
		}
	};
    const initPayment = (data) => {
        
		const options = {
			key: "rzp_test_A2tpP62NDFg7Wm",
			amount: data.amount,
			currency: data.currency,
			name: item.name,
			description: "Test Transaction",
			// image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					
					const id =item?._id
          // console.log(id,"dfdfdfd")
                    
                    paymentVerify(response,id).then((res)=>{
                            if(res.status==200){
                                console.log("passed")
                                navigate("/request")
                            }else{
                                console.log("failed")
                            }
                    }).catch((err)=>{
                        console.log(err,"razo_error 500")
                    })
					
				} catch (error) {
					console.log(error,"try_razo");
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
        // console.log(rzp1)
		rzp1.open();
	};

    const formatDate = (receivedDate) => {
        if (!receivedDate) {
          return "";
        }
        const date = new Date(receivedDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${month}/${day}/${year}`;
      };




  return (
    <div>

{/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <div className={`card w-96   ${item?.status?"bg-success":"bg-warning"} text-neutral-content`}>
          <div className="card-body ">
            <h2 className="card-title">{formatDate(item?.date)}</h2>

            <p> Name: {item?.name} </p>
            <p>email: {item?.email}</p>
            <p>No. of guest:{item?.guest}</p>
            <p>Function Type: {item?.type}</p>
            <p>contact: {item?.Phone} </p>
            <p>Function Time:{item?.time}</p>
            <p>Status:{item?.status?(<a className='text-green-700 font-semibold'>Accept</a>):(<a>Pending</a>)}</p>
            {item?.status?(<p>Amount: {item.amount}</p>):null}




            <div className="card-actions justify-end">
              <button value="Proced"  onClick={handlePayment}  className="btn ">pay advance</button>
              
              
            </div>
          </div>
        </div>




    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  )
}

export default PaymentModal
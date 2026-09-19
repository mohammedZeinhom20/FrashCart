import { getUserOrders } from '@/apis/getUserOrders'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Order, orders} from '@/types/order.t';



const  AllOrders = async () => {

  const data:orders = await getUserOrders()

  

  const totalOrders = data.length;


  const paidOrders = data.filter((order) => order.isPaid).length;

    const deliveredOrders = data.filter(
      (order) => order.isDelivered
    ).length;

    const pendingOrders = data.filter(
      (order) => !order.isPaid
    ).length;


  const totalPaid = data
    .filter((order) => order.isPaid)
    .reduce((total, order) => total + order.totalOrderPrice, 0);

  const totalPending = data
    .filter((order) => !order.isPaid)
    .reduce((total, order) => total + order.totalOrderPrice, 0);

    const totalRevenue = data.reduce(
    (total, order) => total + order.totalOrderPrice,0);
  
  return (
    <main className="min-h-screen bg-slate-50 py-10">

      <div className='md:w-[80%] mx-auto w-full my-10 px-5 md:px-0'>
          <div className='allOrder'>

            <div className='flex flex-col md:flex-row justify-between mb-5 items-center'>
              <div>
              <h1 className='text-3xl font-bold text-slate-900'>My Orders</h1>
              <p className='mt-2 text-sm text-slate-500'> Track and manage all your orders</p>
              </div>
              
              <div className="flex w-[80%] md:w-auto justify-center  mt-5 md:mt-0 item-center md:item-start p-5 bg-slate-100/60 rounded-xl gap-4">
                <span className="fa-stack text-[26px] shrink-0">
                  <i className="fa-solid fa-circle fa-stack-2x text-[#ebf6ed]"></i>
                  <i className="fa-solid fa-dollar-sign fa-stack-1x text-[#27a346] text-xl"></i>
                </span>

                <div>
                  <div className='flex justify-between  font-mono'>
                    <h2>Total Paid</h2>
                    <p>{totalPaid} EGP</p>
                  </div>

                  <div className='flex justify-between gap-4 font-mono'>
                    <h2>Pending Payment</h2>
                    <p>{totalPending} EGP</p>
                  </div>
                  <div className='flex justify-between gap-4 font-mono pt-2 mt-2 border-t-[1px] border-gren-700/35'>
                    <h2>Total Revenue</h2>
                    <p className='font-bold'>{totalRevenue} EGP</p>
                  </div>

                </div>
              </div>
              

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-5">

              {/* Total Orders */}
              <div className="flex item-center md:item-start p-5 bg-slate-100/60 rounded-xl gap-4">
                <span className="fa-stack text-[26px] shrink-0">
                  <i className="fa-solid fa-circle fa-stack-2x text-[#ebf6ed]"></i>
                  <i className="fa-solid fa-bag-shopping fa-stack-1x text-[#27a346] text-xl"></i>
                </span>

                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Total Orders
                  </h2>

                  <p className="text-2xl font-bold text-gray-800 mt-1">
                    {totalOrders}
                  </p>

                  <p className="text-xs text-gray-400 mt-1">
                    All time orders
                  </p>
                </div>
              </div>


              {/* Pending */}
              <div className="flex item-center md:item-start p-5 bg-slate-100/60 rounded-xl gap-4">
                <span className="fa-stack text-[26px] shrink-0">
                  <i className="fa-solid fa-circle fa-stack-2x text-[#fef2e0]"></i>
                  <i className="fa-solid fa-clock fa-stack-1x text-[#f28f28] text-xl"></i>
                </span>

                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Pending
                  </h2>

                  <p className="text-2xl font-bold text-gray-800 mt-1">
                    {pendingOrders}
                  </p>

                  <p className="text-xs text-[#f28f28] mt-1">
                    Waiting for payment
                  </p>
                </div>
              </div>


              {/* Paid */}
              <div className="flex item-center md:item-start p-5 bg-slate-100/60 rounded-xl gap-4">
                <span className="fa-stack text-[26px] shrink-0">
                  <i className="fa-solid fa-circle fa-stack-2x text-[#d2e0f6]"></i>
                  <i className="fa-solid fa-credit-card fa-stack-1x text-[#2c72db] text-xl"></i>
                </span>

                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Paid
                  </h2>

                  <p className="text-2xl font-bold text-gray-800 mt-1">
                    {paidOrders}
                  </p>

                  <p className="text-xs text-[#2c72db] mt-1">
                    Successfully paid
                  </p>
                </div>
              </div>


              {/* Delivered */}
              <div className="flex item-center md:item-start p-5 bg-slate-100/60 rounded-xl gap-4">
                <span className="fa-stack text-[26px] shrink-0">
                  <i className="fa-solid fa-circle fa-stack-2x text-[#f2ebfd]"></i>
                  <i className="fa-solid fa-truck-fast fa-stack-1x text-[#7039c8] text-xl"></i>
                </span>

                <div>
                  <h2 className="text-sm font-medium text-gray-500">
                    Delivered
                  </h2>

                  <p className="text-2xl font-bold text-gray-800 mt-1">
                    {deliveredOrders}
                  </p>

                  <p className="text-xs text-[#7039c8] mt-1">
                    Orders delivered
                  </p>
                </div>
              </div>

            </div>

            {data.map(function(order:Order , idx:number){return <div className='p-5 bg-slate-100/60 rounded-lg mb-5 grid grid-cols-1 lg:grid-cols-2' key={idx}>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  <div className='my-5 flex gap-2 '>
                    <span className="fa-stack text-[26px] shrink-0">
                      <i className="fa-solid fa-circle fa-stack-2x text-[#ebf6ed]"></i>
                      <i className="fa-solid fa-bag-shopping fa-stack-1x text-[#27a346] text-xl"></i>
                    </span>
                      
                      <div> 
                        <p className='font-bold '>Order ID : {order.id}</p>
                        <p className="text-sm text-slate-500 mt-3">
                          <i className="fa-regular fa-calendar mr-2" />
                          Order Date: {new Date(order.updatedAt).toLocaleString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: '2-digit',
                            })}
                        </p>
                      </div>

                    </div>
                    <div >
                      <div className='flex mb-3 '>
                        <AvatarGroup className="gap-2">
                          {order.cartItems.slice(0, 3).map((item) => (
                            <Avatar
                              key={item._id}
                              className="h-14 w-14 rounded-lg me-2 overflow-hidden after:rounded-none after:border-none "
                            >
                              <AvatarImage
                                src={item.product.imageCover}
                                alt={item.product.title}
                                className="object-cover rounded-[5px] relative border-0"
                              />

                              <AvatarFallback className="rounded-lg text-xs">
                                {item.product.title.slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                          ))}

                          {order.cartItems.length > 3 && (
                            <AvatarGroupCount className="h-14 w-14 rounded-lg text-sm font-semibold text-gray-600">
                              +{order.cartItems.length - 3}
                            </AvatarGroupCount>
                          )}
                        </AvatarGroup>
                      </div>
                      <p className='text-gray-600'>{order.cartItems.length} Products</p>
                      <p className='text-gray-600'>{order.cartItems.reduce((total, item) => total + item.count, 0)} Item</p>
                    </div>
                </div>

                <div className='md:flex md:justify-between md:items-center lg:flex-col lg:justify-start lg:items-end text-center'>
                  <p className='text-2xl font-mono text-[#27a346] font-bold text-center'>EGP {order.totalOrderPrice} </p>
                    <h2 className=' my-3 text-center'>{order.paymentMethodType === "card" ? (
                      <Badge className="bg-[#d2e0f6] text-[16px] p-3 text-[#2c72db] dark:bg-blue-950 dark:text-blue-300">
                        <i className="fa-regular fa-credit-card me-2" />
                        Card
                      </Badge>
                        ) : (
                      <Badge className="bg-[#ebf6ed] text-[16px] p-3 text-[#27a346] dark:bg-green-950 dark:text-green-300">
                        <i className="fa-solid fa-money-bill-wave me-2" />
                        Cash
                      </Badge>
                    )}</h2>
                    <h2 className='text-center'>{order.isPaid ? (
                      <Badge className="bg-[#ebf6ed] text-[16px] p-3 text-[#27a346] dark:bg-green-950 dark:text-green-300">
                        <i className="fa-solid fa-circle-check mr-2" />
                        Paid
                      </Badge>
                      ) : (
                        <Badge className="bg-[#fef2e0] text-[16px] p-3 text-[#f28f28] dark:bg-amber-950 dark:text-amber-300">
                          <i className="fa-solid fa-clock mr-2" />
                          Pending
                        </Badge>
                    )}</h2>
        
        
                </div>

            
            </div>})}
          </div>
      </div>
    </main>
  )
}

export default AllOrders
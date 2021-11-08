import React, { useState } from "react";
import "../../assets/css/font.css";
import "../../assets/css/searchFlights.css";
import LargeCard from "../Shared/LargeCard";

import { Form, Input, Button, DatePicker } from "antd";
function onChange(date, dateString) {
  console.log(date, dateString);
}

 const onFinish = (e) => {
   console.log("Success:", e);
 };
 const PassengerDetails = () => {
   return (
     <div>
       <h1 class="text-4xl font-bold text-center text-blue-800 mt-20">
         Plan Ahead and Book with Confidence
       </h1>
       <div class="m-auto">
         <h3 class="text-2xl font-bold pl-64">Payment</h3>
         <LargeCard>
           <Form
             layout="vertical"
             initialValues={{ remember: true }}
             initialValues={{
               remember: true,
             }}
             onFinish={onFinish}
           >
             <div class="font-bold">
               <div class=" ">
                 <Form.Item
                   label="Name on Credit Card "
                   name="creditCardNumber"
                   rules={[
                     {
                       required: true,
                       message: "Please enter name on credit card",
                     },
                   ]}
                 >
                   <Input size="large" placeholder="Enter Credit Card Number" />
                 </Form.Item>
                 <Form.Item
                   label="Credit Card Number"
                   name="creditCardNo"
                   rules={[
                     {
                       required: true,
                       message: "Please enter credit card number",
                     },
                   ]}
                 >
                   <Input size="large" placeholder="Enter Credit Card Number" />
                 </Form.Item>
               </div>
               <div class="">
                 <div class="flex">
                   <Form.Item
                     label="Expiry Month"
                     name="expiryMonth"
                     rules={[
                       {
                         required: true,
                         message: "Please enter expiry month",
                       },
                     ]}
                   >
                     <DatePicker onChange={onChange} picker="month" />
                   </Form.Item>
                   <Form.Item
                     label="Expiry Year"
                     name="expiryYear"
                     rules={[
                       {
                         required: true,
                         message: "Please enter expiry year",
                       },
                     ]}
                   >
                     <DatePicker onChange={onChange} picker="year" />
                   </Form.Item>
                   <Form.Item
                     label="CVV"
                     name="CVV"
                     rules={[
                       {
                         required: true,
                         message: "Please enter expiry year",
                       },
                     ]}
                   >
                     <Input size="large" placeholder="Enter CVV" />
                   </Form.Item>
                 </div>
               </div>
             </div>
           </Form>
           <div class="text-center mt-12 text-right">
             <h3 class="text-xl font-bold text-blue-800">
               Total to be paid now
             </h3>
             <h3 class="text-4xl font-extrabold ">$2609.10</h3>
           </div>
         </LargeCard>
       </div>
       <div class="text-center mt-20 ">
         <Button type="primary">Back</Button>
         <Button type="primary" htmlType="submit">
           Submit
         </Button>
       </div>
     </div>
   );
 };

export default PassengerDetails;

import React, { useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Radio, Result } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type FieldType = {
  username: string;
  password: string;
  email: string;
  queryType: string;
  message: string;
  agreement: boolean;
  firstname: string;
};

const App: React.FC = () => {
  const [submit, setSubmit] = useState(false);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    setSubmit(true);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="max-w-[700px] rounded-xl mx-auto py-7 px-7 mt-24 mb-4 bg-white relative">
      {submit ? (
        <Result
          status="success"
          title="Message Sent!"
          subTitle="Thanks for completing the form. We'll be in touch soon!"

        />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6 text-[#2A4244]">Contact Us</h1>

          <Form
            name="contactForm"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ width: '100%' }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
              <Form.Item<FieldType>
                label="First Name"
                name="firstname"
                rules={[{ required: true, message: 'Please input your firstname!' }]}
                className="w-full sm:w-1/2"
              >
                <Input className="border-green-200 hover:border-green-300 shadow-sm" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                className="w-full sm:w-1/2"
              >
                <Input className="border-green-200 hover:border-green-300 shadow-sm" />
              </Form.Item>
            </div>

            <Form.Item<FieldType>
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input className="border-green-200 hover:border-green-300 shadow-sm" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Query Type"
              name="queryType"
              rules={[{ required: true, message: 'Please select a query type!' }]}
            >
              <Radio.Group className="flex gap-4 justify-between flex-col sm:flex-row sm:justify-between sm:gap-4">
                <div className="border border-gray-300 pl-3 py-2 pr-[150px] rounded-lg flex items-center">
                  <Radio value="general">General Enquiry</Radio>
                </div>
                <div className="border border-gray-300 pl-3 py-2 pr-[150px] rounded-lg flex items-center">
                  <Radio value="support">Support Request</Radio>
                </div>
              </Radio.Group>
            </Form.Item>

            <Form.Item<FieldType>
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message!' }]}
            >
              <TextArea rows={4} className="border-green-200 hover:border-green-300 shadow-sm" />
            </Form.Item>

            <Form.Item<FieldType>
              name="agreement"
              valuePropName="checked"
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('Please agree to the terms')),
                },
              ]}
            >
              <Checkbox>I hereby consent to being contacted by the team *</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                type="primary"
                className="bg-[#0C7D69] hover:bg-[#28b3a5] text-white mt-4"
                htmlType="submit"
                block
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </>
      )}
    </div>
  );
};

export default App;

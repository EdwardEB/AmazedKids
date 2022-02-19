import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { product } from "@prisma/client";
import axios from "axios";

import {
  Button,
  Group,
  Space,
  Text,
  Modal,
  TextInput,
  Textarea,
  Checkbox,
  NumberInput,
  InputWrapper
} from "@mantine/core";

import Dropzone from '../DropZone';
import { EZDiv } from "../EZDiv";

interface iProductForm {
  request: "insert" | "change" | "delete" | "select"
  rid: number
  open: boolean
  closeForm: () => void
}

const productRecord: product = {
  rid_productdetail: null,
  rid_category: null,
  productname: "",
  cover_photo: null,
  inactive: false,
  outofstock: false,
  price: null,
  description: ""
}

const ProductForm = (props: iProductForm) => {
  const { register, handleSubmit, setValue, getValues, reset, control, formState: { errors } } = useForm(
    {
      defaultValues: productRecord
    }
  );

  useEffect(()=>{
    if (props.request == 'insert' && props.open == true) {
      reset(productRecord);
    }
  }, [props.open])

  const onSubmit = (data)=>{
    if (props.request == "insert") {
      axios.post('/api/product', data).then((res)=>{
        if (res.statusText == "OK") {
          props.closeForm();
        }
      })
    }
  }

  return (
    <>
      {props.request == 'delete' ?
        <Modal
          opened={props.open}
          onClose={() => { props.closeForm() }}
          title="Confirm Delete"
          size="md"
        >
          <Text size="sm">This will delete the current record, permanently removing it from the current data set. Do you wish to continue?</Text>
          <Space h={20} />
          <Group position="right">
            <Button onClick={() => { props.closeForm() }}>Cancel</Button>
            <Button color="red" onClick={() => { }}>Delete
            </Button>
          </Group>
        </Modal>
        :
        <Modal
          title="Update Product"
          opened={props.open}
          onClose={() => props.closeForm()}
          overlayOpacity={0.90}
          closeOnClickOutside={false}
          closeOnEscape={false}
          centered={true}
        >
          <div>
            <EZDiv 
              display={"flex"} 
              flexDirection={"row"} 
              alignItems={"flex-start"}
              justifyContent={"space-between"}
            >
              <Checkbox
                label="Inactive"
                //@ts-ignore
                {...register('inactive')}
              />
              <Checkbox
                label="Out of stock"
                //@ts-ignore
                {...register('outofstock')}
              />
            </EZDiv>

            <Space h={10} />

            <TextInput
              name="productname"
              placeholder="Product Name"
              label="Product Name"
              required
              //@ts-ignore
              {...register('productname')}
            />

            <Space h={10} />

            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <NumberInput
                  hideControls
                  label={"Price"}
                  precision={2}
                  //@ts-ignore
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            <Space h={10} />

            <InputWrapper
              label="Cover Photo"
            >
            <Dropzone
              onDrop={(files) => console.log('accepted files', files)}
              renderFunc={()=>
                <div>Click or drop file here</div>}
            />
            </InputWrapper>

            <Space h={10} />
            <Textarea
              minRows={3}
              label="Long Description"
              maxRows={3}
              autosize
              {...register("description")}
            />
          </div>
          <EZDiv 
            display={"flex"} 
            justifyContent={"flex-end"}
            marginTop={"5px"}>
            <Button 
              variant="outline"
              onClick={handleSubmit(onSubmit)}
            >Submit
            </Button>
          </EZDiv>
        </Modal>
      }
    </>
  )
}

export default React.memo(ProductForm);
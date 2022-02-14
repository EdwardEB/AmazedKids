import React from "react";
import {useForm, Controller} from "react-hook-form";
import { PrismaClient, product } from "@prisma/client";

import { Button,
  Group,
  Space,
  Text,
  Modal,
  TextInput,
  Textarea,
  Checkbox,
  NumberInput} from "@mantine/core";

  import Dropzone from '../DropZone';

interface iProductForm {
  request : "insert" | "change" | "delete" | "select"
  rid : number
  open : boolean
  closeForm : ()=>void
}

const productRecord : product = {
  rid_product: 0,
  rid_productdetail: null,
  rid_category: null,
  productname: "",
  cover_photo: null,
  inactive: false,
  outofstock: false,
  price: null,
  description: ""
}

const ProductForm = (props : iProductForm) => {
  const { register, handleSubmit, setValue, getValues ,reset, control, formState: { errors } }  = useForm(
    {
      defaultValues : productRecord
    }
  );
  // console.log(prisma.product)

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
            <Checkbox
              label="Inactive"
              {...register('inactive')}
            />

            <Space h={20} />

            <TextInput
              name="productname"
              placeholder="Product Name"
              label="Product Name"
              required
              {...register('productname')}
            />

            <Space h={20} />

            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <NumberInput
                  hideControls
                  label={"Price"}
                  precision={2}
                  value={field.value}
                  onChange={(val)=>{
                    setValue('price', val)
                  }}
                />
              )}
            />

            <Space h={20} />

            <Dropzone
              onDrop={(files) => console.log('accepted files', files)}
            />

            <Space h={20} />
            <Textarea
              minRows={4}
              label="Long Description"
              maxRows={4}
              autosize
              {...register("description")}
            />
          </div>
        </Modal>
      }
    </>
  )
}

export default React.memo(ProductForm);
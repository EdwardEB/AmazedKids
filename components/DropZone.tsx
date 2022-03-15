import React, { ReactNode, useState, CSSProperties } from 'react';
import { Dropzone, DropzoneProps } from '@mantine/dropzone';
import { Group, Text, TextInput, useMantineTheme } from '@mantine/core';
import { RiCloseCircleLine } from "react-icons/ri"
import { BiCloudUpload } from "react-icons/bi"
import { FiFileText } from "react-icons/fi"

const ImageUploadIcon = ({ status, ...props }) => {
  if (status.accepted) {
    return <BiCloudUpload {...props} />;
  }

  if (status.rejected) {
    return <RiCloseCircleLine {...props} />;
  }

  return <FiFileText {...props} />;
}

const getIconColor = (status, theme) => (
  status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
      ? theme.colors.red[6]
      : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black
)

interface iDropZone {
  multiple?: boolean
  maxSize?: number
  renderFunc?: (status) => ReactNode
  style?: CSSProperties
  children?: any
  value?: string
  onChange?: (fileArray) => void
}

const DropZone = (props: iDropZone) => {
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {props.value ?
        <TextInput
          value={props.value}
          readOnly>
        </TextInput>
        :
        <Dropzone
          loading={loading}
          onDrop={(fileArray) => props.onChange?.(fileArray)}
          maxSize={props.maxSize ? props.maxSize : 20 * 1024 ** 2}
          multiple={props.multiple ? props.multiple : false}
          onReject={(files) => alert('File is too big, or incorrect format. File cannot exceed 20mb')}
          style={props.style}
        >
          {props.renderFunc ? props.renderFunc :
            (status) => {
              return (
                <Group position="center" spacing="xl" style={{ minHeight: 120, pointerEvents: 'none' }}>
                  <ImageUploadIcon
                    status={status}
                    style={{ width: 80, height: 80, color: getIconColor(status, theme) }}
                  />

                  <div>
                    <Text size="xl" inline>
                      Click to select a file, or drag file here
                    </Text>
                    <Text size="sm" color="dimmed" inline mt={7}>
                      File should not exceed 5mb
                    </Text>
                  </div>
                </Group>
              )
            }
          }
        </Dropzone>
      }
    </>
  );
}

export default DropZone;
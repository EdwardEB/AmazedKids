import React, { useEffect } from "react";
import { FixedSizeList, FixedSizeGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Card, Group, Text, Image, Badge, Button, Grid } from "@mantine/core";


const ProcuctCards = ({ feed }) => {

  const Cell = ({ columnIndex, rowIndex, style, data }) => {
    const { feed, columnCount } = data;
    const singleColumnIndex = columnIndex + rowIndex * columnCount;
    const product = feed[singleColumnIndex];

    return (
      <div style={{ ...style, border: "solid 2px white" }}>
        <Card>test{product?.productname}

        </Card>
        {/* <Card shadow="sm" padding="sm">
          <Card.Section>
            <Image src="" height={160} alt="Norway" />
          </Card.Section>

          <Group position="apart" style={{ marginBottom: 5 }}>
            <Text weight={500}>{product.productname}</Text>
            <Badge color="pink" variant="light">
              On Sale
            </Badge>
          </Group>

          <Text size="sm" style={{ color: "primary", lineHeight: 1.5 }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
            Book classic tour now
          </Button>
        </Card> */}
      </div>
    )
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        // backgroundColor: "#d6cae2",
        // marginTop: "2em",
        // position: "sticky",
        top: "0px",
      }}
    >
      <AutoSizer defaultWidth={1920} defaultHeight={1080}>
        {({ width, height }) => {
          const cardWidth = 350;
          const cardHeight = 330;
          const columnCount = Math.floor(width / cardWidth);
          const rowCount = Math.ceil(feed.length / columnCount);

          return (
            <FixedSizeGrid
              className="grid"
              width={width}
              height={height}
              columnCount={columnCount}
              columnWidth={cardWidth}
              rowCount={rowCount}
              rowHeight={cardHeight}
              itemData={{ feed, columnCount }}
            >
              {Cell}
            </FixedSizeGrid>
          );
        }}
      </AutoSizer>
    </div>
  )
}

export default React.memo(ProcuctCards);
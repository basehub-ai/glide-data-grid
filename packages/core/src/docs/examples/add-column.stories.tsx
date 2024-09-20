import React, { useRef } from "react";
import { DataEditorAll as DataEditor } from "../../data-editor-all.js";
import {
    BeautifulWrapper,
    Description,
    MoreInfo,
    useMockDataGenerator,
    defaultProps,
} from "../../data-editor/stories/utils.js";
import { SimpleThemeWrapper } from "../../stories/story-utils.js";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [
        (Story: React.ComponentType) => (
            <SimpleThemeWrapper>
                <BeautifulWrapper
                    title="Add and remove columns"
                    description={
                        <>
                            <Description>You can add and remove columns at your disposal</Description>
                            <MoreInfo>Use the story&apos;s controls to change the number of columns</MoreInfo>
                        </>
                    }>
                    <Story />
                </BeautifulWrapper>
            </SimpleThemeWrapper>
        ),
    ],
};

interface AddColumnsProps {
    columnsCount: number;
}

const rowCount = 150;

export const AddColumns: React.FC<AddColumnsProps> = p => {
    const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);

    const offsetBottom = 150;
    const height = "500px";
    const rowHeight = 32;

    return (
        <div
            style={{
                background: "red",
                overflow: "auto",
                height,
            }}
            ref={scrollerRef}>
            <style>{`
            .hackygrid {
                position: sticky;
                top: 0;
                height: ${height} !important;
            }
            .dvn-scroller {
                overflow: hidden !important;
            }
                .sizer, .sizer-clip, .sizer-clip > div {
                height: ${height} !important;
                max-height: ${height} !important;
                }
                `}</style>
            <header ref={headerRef}>
                <h1 contentEditable style={{ margin: 0 }}>
                    This is the article title
                </h1>
                <div style={{ margin: 0 }}>something something nav</div>
            </header>
            <div
                style={{
                    height: `${(rowCount + 1) * rowHeight + offsetBottom}px`,
                    paddingBottom: offsetBottom,
                }}>
                <DataEditor
                    {...defaultProps}
                    rowHeight={rowHeight}
                    headerHeight={rowHeight}
                    height={"500px"}
                    rowMarkers="number"
                    className="hackygrid"
                    getCellContent={getCellContent}
                    experimental={{ strict: true }}
                    columns={cols}
                    rows={rowCount}
                    scrollerRef={scrollerRef}
                    scrollOffsetTop={55.5}
                    scrollOffsetBottom={offsetBottom}
                />
            </div>
        </div>
    );
};
(AddColumns as any).args = {
    columnsCount: 10,
};
(AddColumns as any).argTypes = {
    columnsCount: {
        control: {
            type: "range",
            min: 2,
            max: 200,
        },
    },
};

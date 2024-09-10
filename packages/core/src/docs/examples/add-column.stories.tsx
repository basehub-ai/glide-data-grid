import React, { useEffect, useRef, useState } from "react";
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

const rowCount = 10_000;

export const AddColumns: React.FC<AddColumnsProps> = p => {
    const { cols, getCellContent } = useMockDataGenerator(p.columnsCount);
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [scrollOffsetTop, setScrollOffsetTop] = useState(0);
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        setScrollOffsetTop(headerRef.current?.offsetHeight ?? 0);
    }, []);

    return (
        <div
            style={{
                background: "red",
                overflow: "auto",
                height: "80vh",
            }}
            ref={scrollerRef}>
            <style>{`
            .hackygrid {
                position: sticky;
                top: 0;
            }
            .dvn-scroller {
                overflow: hidden !important;
            }
                `}</style>
            <header ref={headerRef}>
                <h1
                    contentEditable
                    style={{ margin: 0 }}
                    onInput={() => {
                        setScrollOffsetTop(headerRef.current?.offsetHeight ?? 0);
                    }}>
                    This is the article title
                </h1>
                <div style={{ margin: 0 }}>something something nav</div>
            </header>
            <div
                style={{
                    height: `${(rowCount + 1) * 33.5}px`,
                }}>
                <DataEditor
                    {...defaultProps}
                    height={"80vh"}
                    rowMarkers="number"
                    className="hackygrid"
                    getCellContent={getCellContent}
                    experimental={{ strict: true }}
                    columns={cols}
                    rows={rowCount}
                    scrollerRef={scrollerRef}
                    scrollOffsetTop={scrollOffsetTop}
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

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
    const { cols, getCellContent } = useMockDataGenerator(100);
    const fakeScrollerRef = useRef<HTMLDivElement>(null);
    const scrollerXRef = useRef<HTMLDivElement>(null);
    const scrollerYRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLElement>(null);

    const offsetBottom = 150;
    const height = "500px";
    const rowHeight = 32;

    const offsetLeft = 56;

    React.useEffect(() => {
        const primaryContainer = fakeScrollerRef.current;
        const secondaryContainer = scrollerXRef.current;
        if (!primaryContainer || !secondaryContainer) return;

        let isTransferred = false;

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            const deltaX = event.deltaX;
            const primaryScrollLeft = primaryContainer.scrollLeft;

            if (primaryScrollLeft < offsetLeft || (primaryScrollLeft === offsetLeft && deltaX < 0)) {
                // Scroll the primary container
                console.log("test");
                primaryContainer.scrollLeft = Math.max(0, Math.min(offsetLeft, primaryScrollLeft + deltaX));
                if (isTransferred && deltaX < 0) {
                    isTransferred = false;
                } else if (deltaX <= 0) {
                    secondaryContainer.scrollLeft += deltaX;
                }
            } else {
                // Transfer scroll to secondary container
                secondaryContainer.scrollLeft += deltaX;
                primaryContainer.scrollLeft = offsetLeft; // Ensure primary stays at threshold
                if (!isTransferred) {
                    isTransferred = true;
                }
            }
        };

        primaryContainer.addEventListener("wheel", handleWheel, { passive: false });
        secondaryContainer.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            primaryContainer.removeEventListener("wheel", handleWheel);
            secondaryContainer.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div
            style={{
                background: "red",
                overflow: "auto",
                height,
            }}
            ref={scrollerYRef}>
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
                <h1 style={{ margin: 0 }}>This is the article title</h1>
                <div style={{ margin: 0 }}>something something nav</div>
            </header>

            <div
                ref={scrollerXRef}
                style={{ marginBlock: 20, overflowX: "scroll", height: 400, width: "100%", position: "absolute" }}>
                {" "}
                This is the scroller
                <div style={{ background: "red", width: "200%" }} />
            </div>

            <div
                ref={fakeScrollerRef}
                style={{
                    width: "100%",
                    marginBlock: 20,
                    overflowX: "scroll",
                    height: `${(rowCount + 1) * rowHeight + offsetBottom}px`,
                    paddingBottom: offsetBottom,
                    paddingInline: offsetLeft,
                }}>
                <div
                    style={{
                        width: "200%",
                        marginBlock: 20,
                        overflowX: "scroll",
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
                        scrollerYRef={scrollerYRef}
                        scrollerXRef={scrollerXRef}
                        scrollOffsetTop={55.5}
                        scrollOffsetBottom={offsetBottom}
                    />
                </div>
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

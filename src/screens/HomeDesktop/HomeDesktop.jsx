import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { BlogCard } from "../../components/BlogCard";
import { CaseStudyCard } from "../../components/CaseStudyCard";
import { SectionTitle } from "../../components/SectionTitle";
import "./style.css";

export const HomeDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="home-desktop">
      <div
        className="home-phone"
        style={{
          height:
            screenWidth < 810
              ? "3816px"
              : screenWidth >= 810 && screenWidth < 1440
              ? "2542px"
              : screenWidth >= 1440
              ? "2134px"
              : undefined,
          overflow: screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440) ? "hidden" : undefined,
          width:
            screenWidth < 810
              ? "390px"
              : screenWidth >= 810 && screenWidth < 1440
              ? "810px"
              : screenWidth >= 1440
              ? "1440px"
              : undefined,
        }}
      >
        <div
          className="container"
          style={{
            gap:
              screenWidth < 810
                ? "16px"
                : screenWidth >= 810 && screenWidth < 1440
                ? "24px"
                : screenWidth >= 1440
                ? "42px"
                : undefined,
            height: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "3159px" : undefined,
            padding:
              screenWidth < 810
                ? "0px 16px"
                : screenWidth >= 810 && screenWidth < 1440
                ? "16px 24px"
                : screenWidth >= 1440
                ? "32px 64px"
                : undefined,
            width:
              screenWidth < 810
                ? "390px"
                : screenWidth >= 810 && screenWidth < 1440
                ? "810px"
                : screenWidth >= 1440
                ? "1440px"
                : undefined,
          }}
        >
          <div
            className="top"
            style={{
              padding:
                screenWidth < 810
                  ? "16px 32px"
                  : screenWidth >= 810 && screenWidth < 1440
                  ? "24px 32px"
                  : screenWidth >= 1440
                  ? "32px"
                  : undefined,
            }}
          >
            <div
              className="UX-designer"
              style={{
                fontSize:
                  (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810
                    ? "40px"
                    : screenWidth >= 1440
                    ? "48px"
                    : undefined,
              }}
            >
              UX
              <br />
              DESIGNER
            </div>
          </div>
          <div className="middle-image">
            <div
              className="backdrop"
              style={{
                backgroundImage:
                  screenWidth >= 1440 || screenWidth < 810
                    ? "url(https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/65236c6b7b9edee98bc0b3da/img/board-1.png)"
                    : undefined,
                marginLeft:
                  screenWidth < 810
                    ? "-553.00px"
                    : screenWidth >= 810 && screenWidth < 1440
                    ? "-351.00px"
                    : screenWidth >= 1440
                    ? "-76.00px"
                    : undefined,
              }}
            >
              <div
                className="profile-pic"
                style={{
                  backgroundImage:
                    screenWidth >= 1440 || screenWidth < 810
                      ? "url(https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/65236c6b7b9edee98bc0b3da/img/1696618766419-1.png)"
                      : undefined,
                }}
              />
            </div>
          </div>
          <div
            className="bottom"
            style={{
              alignItems:
                screenWidth < 810
                  ? "flex-start"
                  : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                  ? "center"
                  : undefined,
              flexDirection: screenWidth < 810 ? "column" : undefined,
              justifyContent: screenWidth < 810 ? "center" : undefined,
              padding:
                screenWidth < 810
                  ? "32px 16px"
                  : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                  ? "32px"
                  : undefined,
            }}
          >
            <div
              className="matthew-biehl"
              style={{
                flex: screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440) ? "1" : undefined,
                fontSize:
                  screenWidth < 810
                    ? "40px"
                    : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "16px"
                    : undefined,
                fontWeight:
                  screenWidth < 810
                    ? "700"
                    : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "600"
                    : undefined,
                lineHeight:
                  screenWidth < 810
                    ? "48px"
                    : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "23px"
                    : undefined,
                marginTop: screenWidth < 810 ? "-1.00px" : undefined,
                width: screenWidth < 810 ? "fit-content" : undefined,
              }}
            >
              {screenWidth < 810 && (
                <>
                  MATTHEW
                  <br />
                  BIEHL
                </>
              )}

              {(screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)) && (
                <p className="text-wrapper-3">
                  I help businesses succeed by enhancing customer satisfaction, increasing user engagement, and
                  ultimately driving growth and profitability by consistently delivering user-centered design solutions.
                </p>
              )}
            </div>
            <div
              className="i-help-businesses"
              style={{
                alignSelf: screenWidth < 810 ? "stretch" : undefined,
                fontSize:
                  screenWidth < 810
                    ? "16px"
                    : screenWidth >= 810 && screenWidth < 1440
                    ? "40px"
                    : screenWidth >= 1440
                    ? "48px"
                    : undefined,
                fontWeight:
                  screenWidth < 810
                    ? "600"
                    : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "700"
                    : undefined,
                lineHeight:
                  screenWidth < 810
                    ? "23px"
                    : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "48px"
                    : undefined,
                marginTop: screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440) ? "-1.00px" : undefined,
                textAlign: screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440) ? "right" : undefined,
                width: screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440) ? "fit-content" : undefined,
              }}
            >
              {screenWidth < 810 && (
                <p className="text-wrapper-3">
                  I help businesses succeed by enhancing customer satisfaction, increasing user engagement, and
                  ultimately driving growth and profitability by consistently delivering user-centered design solutions.
                </p>
              )}

              {(screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)) && (
                <>
                  MATTHEW
                  <br />
                  BIEHL
                </>
              )}
            </div>
          </div>
          <div
            className="disclaimer"
            style={{
              flexDirection: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "column" : undefined,
            }}
          >
            <div
              className="frame"
              style={{
                alignSelf: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "stretch" : undefined,
                flex:
                  (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810
                    ? "0 0 auto"
                    : screenWidth >= 1440
                    ? "1"
                    : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "100%" : undefined,
              }}
            >
              <div
                className="under-construction"
                style={{
                  alignSelf: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "stretch" : undefined,
                  fontSize:
                    (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810
                      ? "32px"
                      : screenWidth >= 1440
                      ? "36px"
                      : undefined,
                  width: screenWidth >= 1440 ? "fit-content" : undefined,
                }}
              >
                UNDER CONSTRUCTION
              </div>
              <p className="p">
                I was recently laid off and now have lots of time to dedicate to my portfolio. I plan to showcase my
                work and write about UX strategy.
              </p>
            </div>
            <div
              className="frame-2"
              style={{
                alignSelf: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "stretch" : undefined,
                flex:
                  (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810
                    ? "0 0 auto"
                    : screenWidth >= 1440
                    ? "1"
                    : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
                width: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "100%" : undefined,
              }}
            >
              <div
                className="under-construction-2"
                style={{
                  fontSize:
                    (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810
                      ? "32px"
                      : screenWidth >= 1440
                      ? "36px"
                      : undefined,
                }}
              >
                WORKFLOW
              </div>
              <p className="p">Designing with Figma, exporting to code with Anima, hosting on Netlify.</p>
            </div>
          </div>
          <div className="UX-strategy-section">
            <SectionTitle
              UXStrategyClassName={`${((screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810) && "class"}`}
              className="section-title-instance"
              line={
                screenWidth < 810
                  ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2-3.svg"
                  : screenWidth >= 810 && screenWidth < 1440
                  ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2-5.svg"
                  : screenWidth >= 1440
                  ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2-1.svg"
                  : undefined
              }
              title="UX STRATEGY"
            />
            <div
              className="row"
              style={{
                alignItems:
                  screenWidth < 810
                    ? "center"
                    : screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "flex-start"
                    : undefined,
                flexDirection: screenWidth < 810 ? "column" : undefined,
                justifyContent:
                  screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440) ? "center" : undefined,
                overflow: screenWidth >= 810 && screenWidth < 1440 ? "hidden" : undefined,
              }}
            >
              <BlogCard
                className={`${screenWidth < 810 && "class-2"} ${
                  (screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)) && "class-3"
                }`}
                line={
                  screenWidth >= 1440
                    ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1.svg"
                    : undefined
                }
                text={
                  screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)
                    ? "Implementing a continuous discovery strategy"
                    : undefined
                }
              />
              <BlogCard
                className={`${screenWidth < 810 && "class-2"} ${
                  (screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)) && "class-3"
                }`}
                imageClassName="blog-card-instance"
                line={
                  screenWidth >= 810 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1-11.svg"
                    : screenWidth >= 1440
                    ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1.svg"
                    : undefined
                }
                text="Jira Setup for Discovery and Delivery"
              />
              <BlogCard
                className={`${screenWidth < 810 && "class-2"} ${
                  (screenWidth >= 1440 || (screenWidth >= 810 && screenWidth < 1440)) && "class-3"
                }`}
                imageClassName="instance-node"
                line={
                  screenWidth >= 810 && screenWidth < 1440
                    ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1-12.svg"
                    : screenWidth >= 1440
                    ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1.svg"
                    : undefined
                }
                text="Aligning Business Objectives with&nbsp;&nbsp;Product Objectives"
              />
            </div>
          </div>
          <div
            className="work-section"
            style={{
              flex: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "0 0 auto" : undefined,
              height: screenWidth >= 1440 ? "515px" : undefined,
              marginBottom: screenWidth < 810 ? "-657.00px" : undefined,
            }}
          >
            <SectionTitle
              UXStrategyClassName={`${((screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810) && "class"}`}
              className={`${((screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810) && "class-4"} ${
                screenWidth >= 1440 && "section-title-instance"
              }`}
              line={
                screenWidth < 810
                  ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2-3.svg"
                  : screenWidth >= 810 && screenWidth < 1440
                  ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2-6.svg"
                  : screenWidth >= 1440
                  ? "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2-1.svg"
                  : undefined
              }
              title="WORK"
            />
            <div
              className="row-2"
              style={{
                flex:
                  (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810
                    ? "0 0 auto"
                    : screenWidth >= 1440
                    ? "1"
                    : undefined,
                flexDirection: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "column" : undefined,
                flexGrow: screenWidth >= 1440 ? "1" : undefined,
              }}
            >
              <CaseStudyCard
                className={`${((screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810) && "class-2"} ${
                  screenWidth >= 1440 && "class-3"
                }`}
                imageClassName="case-study-card-instance"
              />
              <div
                className="content"
                style={{
                  alignSelf: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "stretch" : undefined,
                  flex: screenWidth >= 1440 ? "1" : undefined,
                  flexGrow: screenWidth >= 1440 ? "1" : undefined,
                  width: (screenWidth >= 810 && screenWidth < 1440) || screenWidth < 810 ? "100%" : undefined,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

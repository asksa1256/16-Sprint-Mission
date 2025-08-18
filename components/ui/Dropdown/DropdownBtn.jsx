import Image from "next/image";
import sortImg from "@/assets/images/ic_sort.svg";
import useWindowDimension from "@/hooks/useWindowDimension";
import { BREAKPOINTS } from "@/constants";

const DropdownBtn = ({ selected, onClickDropdownBtn, isActive, iconType }) => {
  const innerWidth = useWindowDimension();
  const isMobile = innerWidth < BREAKPOINTS.md;

  return (
    <button
      type="button"
      // css={DropdownBtnStyle(isActive)}
      onClick={onClickDropdownBtn}
    >
      {isMobile ? (
        <img
          src={iconType === "orderIcon" ? sortImg : arrowDownImg}
          alt="정렬"
        />
      ) : (
        <span className="dropdown-btn-container">
          {selected}
          <Image
            src="/images/ic_arrow_down.png"
            alt="더보기"
            width={16}
            height={16}
          />
        </span>
      )}
    </button>
  );
};

export default DropdownBtn;

// const DropdownBtnStyle = (isActive) => css`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: auto;
//   height: 100%;
//   padding: 8px;
//   border: ${isActive
//     ? "1px solid var(--primary-color)"
//     : "1px solid var(--border-color)"};
//   border-radius: var(--border-radius-sm);
//   color: var(--secondary-color);
//   text-align: left;
//   font-size: 1rem;
//   min-width: 48px;
//   aspect-ratio: 1/1;

//   &:hover {
//     border-color: var(--primary-color);
//   }

//   .dropdown-btn-container {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     width: 100%;
//   }

//   @media (min-width: 600px) {
//     width: 130px;
//     padding: 8px 20px;
//     justify-content: space-between;
//     aspect-ratio: initial;
//   }
// `;

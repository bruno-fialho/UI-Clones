import styled, { css } from "styled-components";
import {
  HiOutlineLocationMarker,
  HiChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";

export const Container = styled.div``;

export const Title = styled.div``;

export const LocationCard = styled.div``;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCSS}
`;

export const ReputionCard = styled.div``;

export const ReputionThermometer = styled.div``;

export const ReputionRow = styled.div``;

export const SupportIcon = styled(HiChatAlt2)`
  ${iconCSS}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCSS}
`;

export const More = styled.div``;

import React from 'react';
import styled from 'styled-components';

interface BubbleChartProps {
  data: Record<string, number>;
}

const BubbleChart: React.FC<BubbleChartProps> = ({ data }) => {
  const width = 800;
  const height = 500;
  const maxRadius = 50;

  const colors = [
    "#FF6347", "#FF4500", "#FFD700", "#ADFF2F", "#32CD32",
    "#00FA9A", "#00CED1", "#1E90FF", "#9370DB", "#FF1493"
  ];

  const dataArray = Object.keys(data).map(key => ({ text: key, value: data[key] }));

  const totalValue = dataArray.reduce((acc, d) => acc + d.value, 0);

  const bubbles = dataArray.map((d, index) => {
    const radius = d.value > 0 ? Math.sqrt(d.value / totalValue) * maxRadius * 2 : 0;
    const angle = (index / dataArray.length) * 2 * Math.PI;
    const x = width / 2 + Math.cos(angle) * (width / 4);
    const y = height / 2 + Math.sin(angle) * (height / 4);
    const color = colors[index % colors.length];

    return { ...d, radius, x, y, color };
  });

  return (
    <SvgContainer width={width} height={height}>
      {bubbles.map((bubble, index) => (
        bubble.radius > 0 && (
          <React.Fragment key={index}>
            <circle cx={bubble.x} cy={bubble.y} r={bubble.radius} fill={bubble.color} />
            <text
              x={bubble.x}
              y={bubble.y}
              textAnchor="middle"
              dy=".3em"
              fill="white"
              fontSize={bubble.radius / 3}
              fontWeight="bold"
            >
              {bubble.text}
            </text>
          </React.Fragment>
        )
      ))}
    </SvgContainer>
  );
};

const SvgContainer = styled.svg`
  display: block;
  margin: auto;
  background-color: #2c3e50;
  border-radius: 8px;
`;

export default BubbleChart;


import React from 'react';
import CurveReadme from '!!raw-loader!../../../../visx-curve/Readme.md';
import DocPage from '../../components/DocPage';
import CurvesTile from '../../components/Gallery/CurvesTile';

const examples = [CurvesTile];

function CurveDocs() {
  return <DocPage readme={CurveReadme} examples={examples} visxPackage="curve" />;
}
export default CurveDocs;

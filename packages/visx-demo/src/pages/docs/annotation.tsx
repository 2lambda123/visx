import React from 'react';
import AnnotationReadme from '!!raw-loader!../../../../visx-annotation/Readme.md';
import Annotation from '../../../../visx-annotation/src/components/Annotation';
import EditableAnnotation from '../../../../visx-annotation/src/components/EditableAnnotation';
import CircleSubject from '../../../../visx-annotation/src/components/CircleSubject';
import LineSubject from '../../../../visx-annotation/src/components/LineSubject';
import Connector from '../../../../visx-annotation/src/components/Connector';
import Label from '../../../../visx-annotation/src/components/Label';
import HtmlLabel from '../../../../visx-annotation/src/components/HtmlLabel';
import DocPage from '../../components/DocPage';
import AnnotationTile from '../../components/Gallery/AnnotationTile';

const components = [
  Annotation,
  EditableAnnotation,
  CircleSubject,
  LineSubject,
  Connector,
  Label,
  HtmlLabel,
];

const examples = [AnnotationTile];

function AnnotationDocs() {
  return (
    <DocPage
      examples={examples}
      components={components}
      readme={AnnotationReadme}
      visxPackage="annotation"
    />
  );
}

export default AnnotationDocs;

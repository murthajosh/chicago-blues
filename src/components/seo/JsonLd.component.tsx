interface Props {
  data: Record<string, unknown>;
}

const JsonLd: React.FC<Props> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;

interface Props {
    title: string;
}


const PageLayout = ({ title } : Props) => {
  return (

    <div>
        <div>
            <h2 className="mb-2">
                { title }
            </h2>
            <hr/>
        </div>

        <div>
            {/* Content Here */}
        </div>
    </div>

  );
};

export default PageLayout;

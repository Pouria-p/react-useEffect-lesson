import { useNavigate } from "react-router-dom";
const CharactersList = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      {props.list === null ? (
        <h1>loading....</h1>
      ) : (
        <h1>{props.list.length}</h1>
      )}
      <h2>
        List of characters:
        {props.list && props.list.length > 0 ? (
          props.list.map((elem) => {
            return (
              <div key={elem.id}>
                <p>name: {elem.name}</p>
                <p>weapon:{elem.weapon}</p>
                <button
                  onClick={() => {
                    navigate(`/details/${elem.id}`);
                  }}
                >
                  view Details
                </button>
              </div>
            );
          })
        ) : (
          <p>dum dum wants gum gum</p>
        )}
      </h2>
    </div>
  );
};
export default CharactersList;

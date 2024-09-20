import useErrorHandler from "../api/useErrorHandler";
import { useCallback, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import Api from "../api";

function Like({
  active,
  total,
  postId,
}: {
  active: boolean;
  total: number;
  postId: string;
}) {
  const [localActive, setLocalActive] = useState(false);
  const [localTotal, setLocalTotal] = useState(0);

  useEffect(() => {
    setLocalActive(active);
  }, [active]);

  useEffect(() => {
    setLocalTotal(total);
  }, [total]);

  const [add, { error: addError }] = useMutation(
    Api.Mutations.Reaction.addReaction
  );
  useErrorHandler(addError);

  const [remove, { error: removeError }] = useMutation(
    Api.Mutations.Reaction.removeReaction
  );
  useErrorHandler(removeError);

  const like = useCallback(() => {
    if (localActive)
      remove({
        variables: {
          postId,
          reaction: "like-it",
        },
      });
    else
      add({
        variables: {
          postId,
          input: {
            overrideSingleChoiceReactions: true,
            reaction: "like-it",
          },
        },
      });

    setLocalTotal((value) => value + (localActive ? -1 : 1));
    setLocalActive((value) => !value);
  }, [add, localActive, postId, remove]);

  return (
    <>
      <button
        onClick={like}
        className={
          "btn btn-outline btn-warning rounded-lg [&.active]:bg-red-100 [&.active]:border-red-500 " +
          (localActive ? "active" : "")
        }
      >
        <div className="flex items-center justify-center shrink-0 h-[1em] w-[1em] text-red-500">
          <img
            src={
              localActive
                ? "/icons/heart-rounded-filled.svg"
                : "/icons/heart-rounded.svg"
            }
          />
        </div>
      </button>
      {!!localTotal && (
        <div className="flex flex-row items-center space-x-2">
          <div className="flex items-center justify-center shrink-0 h-[1em] w-[1em] text-red-500">
            <img src="/icons/heart-rounded-filled.svg" />
          </div>
          <span className="text-sm">{localTotal}</span>
        </div>
      )}
    </>
  );
}

export default Like;

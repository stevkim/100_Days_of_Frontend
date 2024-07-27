interface ConfirmDeleteProps {
  confirmRemove: () => void;
  closeModal: () => void;
}

const ConfirmDelete = ({ confirmRemove, closeModal }: ConfirmDeleteProps) => {
  return (
    <div className="h-fit w-fit rounded-lg bg-white p-6">
      Are you sure you want to delete the image?
      <div className="mt-4 flex w-full gap-4">
        <button
          className="w-full rounded-md border-2 py-1"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="w-full rounded-md bg-red-200 py-1 text-red-500"
          onClick={confirmRemove}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;

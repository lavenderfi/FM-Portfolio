export default function Email() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => (window.location = 'mailto:fionam.dev@gmail.com')}
      >
        fionam.dev@gmail.com
      </button>
    </div>
  );
}

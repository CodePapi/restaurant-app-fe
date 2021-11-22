const ErrorHandler = e => {
  let errorResponse;
  try {
    if (e.response.data === undefined) errorResponse = 'Something went wrong';
    
    if(e.response.status ===500){
      errorResponse = 'Something went wrong';
    }else if(e.response.data.errors){
      const { errors } = e.response.data;
      errorResponse = errors && Array.isArray(errors) ? errors[0].msg : 'Something went wrong';
    }else{
      const { error } = e.response.data;
      errorResponse = error ? error : 'Something went wrong';
    }
  } catch (e) {
    errorResponse = 'Something went wrong';
  }

  return errorResponse;
};

export default ErrorHandler;

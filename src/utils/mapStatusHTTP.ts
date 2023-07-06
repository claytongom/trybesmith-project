export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CREATED: 201,
    SUCCESSFUL: 200,
  };
  
  if (status in statusHTTPMap) {
    return statusHTTPMap[status];
  } 
  return 500;
}
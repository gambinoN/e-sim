import { useState } from 'react';

interface PackageInfo {
  packageCode: string;
  count: number;
  price: number;
}

interface OrderData {
  transactionId: string;
  amount: number;
  packageInfoList: PackageInfo[];
}

interface SuccessResponse {
  success: boolean;
  [key: string]: any; 
}

interface ErrorResponse {
  success?: boolean;
  errorMsg?: string;
}

/**
 * Custom hook for ordering a package.
 * @returns {Object} - Contains the function to order a package and related states.
 */
export const useOrderPackage = (): object => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<SuccessResponse | null>(null);

  /**
   * Order a package using the API endpoint.
   * @param {OrderData} orderData - The data required to place the order.
   */
  const orderPackage = async (orderData: OrderData): Promise<void> => {
    setLoading(true);
    setError(null);
    setSuccess(null);
  
    try {
      const response = await fetch('/api/order-package', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      const result = await response.json();
  
      if (response.ok && result.success) {
        setSuccess(result);
      } else {
        throw new Error(result.errorMsg || 'Failed to order the package.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };  

  return { orderPackage, loading, error, success };
};

/**
 * Example usage of the hook:
 * 
 * const { orderPackage, loading, error, success } = useOrderPackage();
 * 
 * const handleOrder = () => {
 *   const orderData: OrderData = {
 *     transactionId: 'unique_txn_id',
 *     amount: 15000,
 *     packageInfoList: [
 *       {
 *         packageCode: '7aa948d363',
 *         count: 1,
 *         price: 15000,
 *       },
 *     ],
 *   };
 * 
 *   orderPackage(orderData);
 * };
 */